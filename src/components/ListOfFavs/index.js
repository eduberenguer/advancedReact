import React from 'react'
import { Image, Grid, Link} from './styles'

export const ListOfFavs = (props) => {
  return <Grid>
    {
      props.favs.map(fav =>
        <Link to={`/detail/${fav.id}`} key={fav.id}>
          <Image src={fav.src} />
        </Link>
      )
    }
  </Grid>
}
