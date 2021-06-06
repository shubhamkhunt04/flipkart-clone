// Sample card from Airbnb

import { StarIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Badge, Box } from '@chakra-ui/layout';

const ProductCard = ({ imgUrl, name, price, productSize, brand }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={imgUrl} alt='Product' />

      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          ></Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {name}
        </Box>

        <Box>
          {price}
          <Box as='span' color='gray.600' fontSize='sm'>
            /-
          </Box>
        </Box>

        <Box as='span' fontWeight='700' color='gray.600' fontSize='sm'>
          {brand}
        </Box>

        <Box d='flex' mt='2' alignItems='center'>
          Available size :
          {productSize?.map((s) => (
            <h2>{s + ', '}</h2>
          ))}
        </Box>
        {productSize?.map((s) => (
          <StarIcon key={s} color={s ? 'teal.500' : 'gray.300'} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductCard;
