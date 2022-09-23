import React, { FunctionComponent } from 'react'
import { WORDINGS } from '../../wordings'

type CTAProps = {
    cta_type: 'cta_host' | 'cta_guest'
}

export const CTA: FunctionComponent<CTAProps> = ({cta_type}) => {

    return(
        <h3>{WORDINGS[cta_type]}</h3>
    )
}