import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

import './header.css'

const Header = () => {
	return (
		<>
		<Breadcrumb separator='-'>
  			<BreadcrumbItem className='home'>
    	<BreadcrumbLink href='#'>Home</BreadcrumbLink>
 			 </BreadcrumbItem>

	  	<BreadcrumbItem>
	  	  <BreadcrumbLink href='#'>About</BreadcrumbLink>
	  	</BreadcrumbItem>

	  	<BreadcrumbItem isCurrentPage>
	  	  <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
	  	</BreadcrumbItem>
		</Breadcrumb>
		</>
	)
}

export default Header