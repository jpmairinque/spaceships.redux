import React from 'react'
import Header from '../Header/Header'
import * as S from './styles'

const Template = ({children}) => {
    return (
        <S.Wrapper>
            <Header/>
            {children}
        </S.Wrapper>
    )
}

export default Template
