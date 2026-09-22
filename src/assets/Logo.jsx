export const Logo =({ className = '' }) => {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src="src/assets/urduban-logo.png"
      alt="Urduban"
    />
  )
}