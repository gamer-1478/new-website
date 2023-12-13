/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
"use client"
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'; 
import { v4 as uuidv4 } from 'uuid';


export default async function () {
    return await new Promise(async (resolve, reject) => {
        var firebaseConfig = {
            apiKey: "AIzaSyBhyh_H5mTHi2MkQ24s4Hy5JJXFCxiGlOI",
            authDomain: "aayushwebsite-cf1b8.firebaseapp.com",
            projectId: "aayushwebsite-cf1b8",
            storageBucket: "aayushwebsite-cf1b8.appspot.com",
            messagingSenderId: "135208625419",
            appId: "1:135208625419:web:7b79211db5335483aeae0e",
            measurementId: "G-W0YPVRETLD"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        //firebase.analytics();

        const API_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=IN'
        const spotifyDoc = firebase.firestore().collection('spotify').doc('spotify');


        let Fdoc = await spotifyDoc.get()

        if (Fdoc.exists) {
            Fdoc = await Fdoc.data()
            if (Fdoc.hasOwnProperty('created') && Fdoc.created + Fdoc.data_.expires_in > Date.now() / 1000) {
                resolve(await GetDataSpot());
            }
            else {
                let PstResp = new Promise(async (resolve, reject) => {
                    try {
                        await fetch('https://accounts.spotify.com/api/token', {
                            "cache": "no-store",
                            next: { revalidate: 0 },
                            "method": "POST",
                            "headers": { "Content-Type": "application/x-www-form-urlencoded" },
                            
                            "body": [`${encodeURIComponent('grant_type')}=${encodeURIComponent('refresh_token')}`, `${encodeURIComponent('refresh_token')}=${encodeURIComponent(Fdoc.refresh_token)}`, `${encodeURIComponent('client_secret')}=${encodeURIComponent('f782e45e37ea42d3892ed030a1bd363b')}`, `${encodeURIComponent('client_id')}=${encodeURIComponent('0f904065f5114298ac1ed6d10da05e00')}`].join('&')
                        }).then(async (results) => {
                            console.log(results)
                            resolve(results);
                        })
                    }
                    catch (err) {
                        reject({
                            statusCode: err.statusCode || 500,
                            body: JSON.stringify({
                                error: err.message
                            })
                        })
                    }
                }).then((resolve) => { return resolve })
                    .catch((reject) => { return reject })

                await PstResp.then(async (results) => {
                    spotifyDoc.update({
                        created: Date.now() / 1000,
                        data_: await results.json()
                    })
                })
                const results = await GetDataSpot()
                console.log(results)
                resolve(results);
            }
        }

        async function GetDataSpot() {
            let Fdoc = await spotifyDoc.get()
            Fdoc = Fdoc.data()

            let response = new Promise(async (resolve, reject) => {
                try {
                    await fetch(API_ENDPOINT, {
                        "cache": "no-store",
                        next: { revalidate: 0 },
                        "method": "GET",
                        "headers": { "Authorization": "Bearer " + Fdoc.data_.access_token }
                    }).then((result) => { resolve(result.json()); })
                    // handle response
                } catch (err) {
                    reject({
                        statusCode: err.statusCode || 500,
                        body: JSON.stringify({
                            error: err.message
                        })
                    })
                }
            }).then((resolve) => { return resolve })
                .catch((reject) => { return reject })

            return {
                statusCode: 200,
                body: JSON.stringify({
                    data: await response
                })
            }
        }
    }).then((resolve) => { return resolve })
        .catch((reject) => { return reject })
};

