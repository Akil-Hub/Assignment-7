'use client'

import DataProvider from "@/context/dataContext"


const Providers = ({children}) => {
  return (
    <DataProvider>{children}</DataProvider>
  )
}

export default Providers