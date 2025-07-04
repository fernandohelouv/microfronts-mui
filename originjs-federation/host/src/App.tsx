import { lazy } from 'react'

const DataGridCrud = lazy(
	async () => import('remote_app/data-grid-crud'),
);

function App() {
  return (
    <>
      <h1>Host App OriginJS</h1>
      <DataGridCrud/>
    </>
  )
}

export default App