import { useState, useEffect } from 'react'
import { LatLng } from '../../interfaces/Map'
import Map from './Map'
import {MousePosProvider} from '../../contexts/ActiveMousePos'
import Marker from './Marker'
import Anchor from './Anchor'
import ModalInfo from './ModalInfo'
import styles from './styles.module.css'


const getLatLngKey = (latlng:LatLng) => latlng.lat.toString() + latlng.lng.toString()

const MainMap = () => {
  const [currCursorLatLng, setCurrCursorLatLng] = useState(null)
  const [activeAddButton, setActiveAddButton] = useState(null)
  const [activeMarker, setActiveMarker] = useState(null)
  const [markers, setMarkers] = useState([])
  const [mapNotes, setMapNotes] = useState({})
  const markerButtons = [
    {
      key: "1",
      type: 'normal'
    },
    {
      key: "2",
      type: 'normal'
    },
    {
      key: "3",
      type: 'normal'
    }
  ]

  useEffect(() => {
    const listener = () => {
      if(activeAddButton && currCursorLatLng) {
        setMarkers([
          ...markers,
          currCursorLatLng
        ])
        setActiveMarker(getLatLngKey(currCursorLatLng))
      }
      setActiveAddButton(null)
    }
    window.addEventListener('mouseup', listener)
    window.addEventListener('touchend', listener)
    return () => {
      window.removeEventListener('mouseup', listener)
      window.removeEventListener('touchend', listener)
    }
  }, [currCursorLatLng, activeAddButton])

  return <MousePosProvider>
    <div className={styles.MapContainer}>
      <ul className = {styles.Sidebar}>
        {
          markerButtons.map((m, i) => <li key={i}>
            <Marker
              isActive={m.key === activeAddButton}
              setMarkerActive={() => {
                setActiveAddButton(m.key)
              }}
            />
          </li>)
        }
      </ul>
      <Map
        onCursorMove={(latLng: LatLng | null) => {
          setCurrCursorLatLng(latLng)
        }}
        triggerEdit={
          (key) => setActiveMarker(key)
        }
        markers={markers.map(
          m => ({
            ...m,
            note: mapNotes[getLatLngKey(m) || '']
          })
        )}
      />
      <Anchor isActive={!!activeAddButton} />
      {
        activeMarker &&
        <ModalInfo
          actionCancel={() => {
            setActiveMarker(null)
          }}
          actionSave={(note:string) => {
            setMapNotes({
              ...mapNotes,
              [activeMarker]: note
            })
            setActiveMarker(null)
          }}
          {
            ...(
              mapNotes[activeMarker] ? {
                currNote: mapNotes[activeMarker]
              } : {}
            )
          }
        />
      }
    </div>
  </MousePosProvider>
}

export {
  MainMap as default
}
