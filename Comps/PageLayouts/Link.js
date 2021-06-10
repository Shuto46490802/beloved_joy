import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children, as, ariaLabel }) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} is-active`
    }

    return <Link ariaLabel={ariaLabel} href={href} as={as}>{React.cloneElement(children, { className })}</Link>
}