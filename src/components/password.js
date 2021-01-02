import { useState, useEffect } from 'react';

const _PASSWORD_REGEXP =  "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}"

function Password(props) {
  const [ pw, setPw ] = useState('');
  const [isValid, setisValid]= useState(false);
  const [isCL, setIsCL] =  useState(false);
 
  useEffect(() => {
    if (isCL) {
      console.log('INPUT', isCL)

      let timeIdx = setTimeout(() => {
        console.log('setTimeout')
        setIsCL(false);
        clearTimeout(timeIdx)
      }, 1000)
    }
  }, [isCL])

  function onChangeHandler(e) {
    setPw(e.target.value);
  }

  function onBlurHandler(e) {
    let temp = pw.search(_PASSWORD_REGEXP) < 0
    setisValid(temp);
  }

  function onKeyDownHandler(e) {
    let isCapsLock = e.getModifierState('CapsLock')
    setIsCL(isCapsLock)
  }
  
  return (
    <>
      <input 
        type="password" 
        value={pw} 
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onKeyDown={onKeyDownHandler}
      />
      <h4>입력된 비밀번호: {pw}</h4>
      {isValid? (<h4>비밀번호가 올바르지 않습니다.</h4>) : (<></>)}
      {isCL? (<h4>캡스락키가 눌렸습니다.</h4>) : (<></>)}
    </>
  )
}

export default Password;