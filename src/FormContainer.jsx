import React from 'react'
import FirstNameInput from './FirstNameInput'
import LastNameInput from './LastNameInput'
import DateOfBirthInput from './DateOfBirthInput'
import SubmitButton from './SubmitButton'

const FormContainer = () => {
  return (
    <>
    <form id='inputForm'>
    <FirstNameInput/>
    <LastNameInput/>
    <DateOfBirthInput/>
    <SubmitButton/>
    </form>
    </>
  )
}

export default FormContainer