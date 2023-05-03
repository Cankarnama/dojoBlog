import React from 'react'

function netNinja() {
  return (
    <div>
      <label htmlFor="questions">security question</label>
      <select name="questions" id="questions">
        <option value="q1">what is the name of your favourite food</option>
        <option value="q2">what is the name of your favourite person</option>
        <option value="q3">what is the name of your favourite sport</option>
      </select>
<br /><br />

 <label htmlFor="answers"> security question answers</label>
 <input type="text" id="answers" name="answers"/>
 



    </div>
  )
}

export default netNinja