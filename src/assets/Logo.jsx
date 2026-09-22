import UrdubanLogo from "../assets/urduban-logo.png"

export const Logo =({ className = '' }) => {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={UrdubanLogo}
      alt="Urduban"
    />
  )
}