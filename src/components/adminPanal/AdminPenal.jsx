import React from 'react'
import {ChildBox, ContainerBox, SubmiBtn, TextFieldBox, TypographyBox } from './styled-component'

export const AdminPenal = () => {
    return (
        <>
            <ContainerBox>
                <ChildBox>
                    <TypographyBox>Are you Admin</TypographyBox>
                    <TextFieldBox type="text" />
                    <SubmiBtn>
                        Submit
                    </SubmiBtn>
                </ChildBox>
            </ContainerBox>
          
        </>
    )
}
