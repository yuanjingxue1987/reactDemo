import { useContext } from 'react'
import { useMousePosContext } from '../../contexts/ActiveMousePos'
import styles from './styles.module.css'

interface MainProps {
  isActive: boolean
}


const MainAnchor = ({isActive}: MainProps) => {
  const contextPos = useMousePosContext()
  const pos = contextPos.data

  return (isActive && contextPos.data) ? <>
    <span
      className={styles.AnchorMarker}
      style={{
        top: pos.y,
        left: pos.x
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="5.6444445mm" height="9.847393mm" viewBox="0 0 20 34.892337" id="svg3455" version="1.1">
        <g transform="translate(-814.59595,-274.38623)">
          <g id="g3477" transform="matrix(1.1855854,0,0,1.1855854,-151.17715,-57.3976)">
            <path  d="m 817.11249,282.97118 c -1.25816,1.34277 -2.04623,3.29881 -2.01563,5.13867 0.0639,3.84476 1.79693,5.3002 4.56836,10.59179 0.99832,2.32851 2.04027,4.79237 3.03125,8.87305 0.13772,0.60193 0.27203,1.16104 0.33416,1.20948 0.0621,0.0485 0.19644,-0.51262 0.33416,-1.11455 0.99098,-4.08068 2.03293,-6.54258 3.03125,-8.87109 2.77143,-5.29159 4.50444,-6.74704 4.56836,-10.5918 0.0306,-1.83986 -0.75942,-3.79785 -2.01758,-5.14062 -1.43724,-1.53389 -3.60504,-2.66908 -5.91619,-2.71655 -2.31115,-0.0475 -4.4809,1.08773 -5.91814,2.62162 z" fill="#ff4646" strokeWidth="1" stroke="#d73534"/>
            <circle r="3.0355" cy="288.25278" cx="823.03064" id="path3049" fill="#590000"/>
          </g>
        </g>
      </svg>
    </span>
  </> : null
}

export default MainAnchor
