import React, { createContext, forwardRef, useContext } from 'react'
import { useBreakpointUpdater } from '../../hooks/useBreakpoint'

export interface LinkComponentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const makeLinkComponent = (
  render: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>,
) => ({ __forwardRef__: forwardRef(render) } as const)

export type LinkComponent = ReturnType<typeof makeLinkComponent> | React.ComponentType<LinkComponentProps>

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultLinkComponent = makeLinkComponent((props, ref) => <a ref={ref} {...props} />)

const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent)

export const useLinkComponent = (ref: React.Ref<HTMLAnchorElement>) => {
  const linkComponent = useContext(LinkComponentContext)

  if ('__forwardRef__' in linkComponent) {
    return linkComponent.__forwardRef__
  }

  return linkComponent
}

export const Provider = ({
  children,
  linkComponent,
}: {
  children: React.ReactNode
  linkComponent?: LinkComponent
}) => {
  useBreakpointUpdater()

  return (
    <LinkComponentContext.Provider value={linkComponent ?? DefaultLinkComponent}>
      {children}
    </LinkComponentContext.Provider>
  )
}
