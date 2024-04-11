import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, Link, Flex, Spacer, Image } from "@chakra-ui/react";
import { FaSearch, FaTag } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // TODO: Implement actual search functionality
    const dummyResults = [
      {
        name: "Product 1",
        price: 10.99,
        url: "https://example.com/product1",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMjgyMDc1N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        name: "Product 2",
        price: 8.99,
        url: "https://example.com/product2",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0fGVufDB8fHx8MTcxMjgyMDc1N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        name: "Product 3",
        price: 12.49,
        url: "https://example.com/product3",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9kdWN0fGVufDB8fHx8MTcxMjgyMDc1N3ww&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ];
    setResults(dummyResults);
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Heading size="xl" mr={4}>
          AliExpress 최저가 검색
        </Heading>
        <Spacer />
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGlleHByZXNzJTIwbG9nb3xlbnwwfHx8fDE3MTI4MjA3NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" h={8} />
      </Flex>
      <Flex mb={8}>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="제품명을 입력하세요" mr={4} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
          검색
        </Button>
      </Flex>
      {results.map((result, index) => (
        <Flex key={index} mb={4} p={4} borderWidth={1} rounded="md">
          <Image src={result.image} w={24} h={24} objectFit="cover" mr={4} />
          <Box>
            <Link href={result.url} isExternal>
              <Heading size="md">{result.name}</Heading>
            </Link>
            <Flex align="center" mt={2}>
              <FaTag />
              <Text ml={2} fontWeight="bold" color="green.500">
                ${result.price}
              </Text>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Index;
