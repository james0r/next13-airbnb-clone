'use client'

import Container from '../components/Container'
import Heading from "../components/Heading"
import ListingCard from '../components/listings/ListingCard'
import ListingGrid from "../components/listings/ListingGrid"
import { SafeListing, SafeUser } from "../types"

interface FavoritesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return ( 
    <>
      <Container>
        <Heading
          title="Favorites"
          subtitle="Your favorite listings"
        />
        <ListingGrid>
          {
            listings.map((listing) => (
              <ListingCard
                key={listing.id}
                currentUser={currentUser}
                data={listing}
              />
            ))
          }
        </ListingGrid>
      </Container>
    </>
   );
}
 
export default FavoritesClient;