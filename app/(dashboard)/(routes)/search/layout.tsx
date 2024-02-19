import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Search'
}

const SearchPage = ({
  children
}: {
  children: React.ReactNode
}) => { 
  return (
    <>
      {children}
    </>
  )
}

export default SearchPage;