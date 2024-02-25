import './index.scss'

function Technology({ img, name, backgroundColor }) {
  const defaultColor = { r: 0, g: 0, b: 0 };

  const backgroundStyle = {
    backgroundColor: `rgb(${(backgroundColor && backgroundColor.r) || defaultColor.r},
                          ${(backgroundColor && backgroundColor.g) || defaultColor.g},
                          ${(backgroundColor && backgroundColor.b) || defaultColor.b})`,
  };

  return (
    <div className='btn-technology' style={backgroundStyle}>
        <img src={img} alt={name} title={name} />
    </div>
  )
}

export default Technology