"use client"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BackComponent({params}) {
  return (
      <FontAwesomeIcon icon={faArrowLeft} className='h-7 cursor-pointer' onClick={() => { window.location.href = '/blogs' }} />
  )
}
