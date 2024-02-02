import React from 'react'
import { useContext } from 'react'
import { rosterContext } from './App'
import ParticipantCard from './ParticipantCard'

const SignedUpRoster = () => {
    const roster = useContext(rosterContext)
    console.log('inside SignedUpRoster:' ,roster)
  return (
    <>
    {roster.map((participant, index) => <ParticipantCard key={index} participant={participant}/>)}
    </>
  )
}

export default SignedUpRoster