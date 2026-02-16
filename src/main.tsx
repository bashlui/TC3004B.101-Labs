import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './clases/strings.ts'
import './clases/arrays.ts'
import './clases/objetos.ts'
import './clases/funciones.ts'

import './clases/import.ts'
import Bancos from './Bancos.tsx'
import BancosFiltrado from './clases/Lab1/BancosFiltrado.tsx'
import HolaMundo from './clases/Lab1/HolaMundo.tsx'
import Contador from './clases/Lab1/Contador.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bancos />
    <HolaMundo />
    <Contador />
    <BancosFiltrado />
  </StrictMode>,
)
