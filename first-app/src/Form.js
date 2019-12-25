import React from 'react';

import styled from 'styled-components'


const Form = () => {
    return (
        <FromWrap>
            <input type="text" />
            <button type="submit">追加</button>
        </FromWrap>
    )
}

const FromWrap = styled.form`
    input {
        width: 500px;
    }
`

export default Form
