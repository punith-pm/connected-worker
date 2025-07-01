import { Box, Button, Flex, Link, Table } from "@chakra-ui/react";
import React, { useState } from "react";

const ReportTable = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const tableData = [
    {
      name: "Location Report",
      url: "/AZ-400 - AZ-400-1.pdf",
      url1: "/AZ-400 - AZ-400-1.pdf",
    },
    {
      name: "Tracking Summary",
      url: "https://www.orimi.com/pdf-test.pdf",
      url1: "https://www.orimi.com/pdf-test.pdf",
    },
  ];

  return (
    <div>
      <Flex gap='15px' padding='10px'>
        <Table.Root showColumnBorder>
          <Table.ColumnGroup>
            <Table.Column htmlWidth="50%" />
            <Table.Column htmlWidth="40%" />
            <Table.Column />
          </Table.ColumnGroup>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader backgroundColor="teal.500" color="white">
                Product
              </Table.ColumnHeader>
              <Table.ColumnHeader backgroundColor="teal.500" color="white">
                Category
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableData.map((item, i) => (
              <Table.Row key={i} _hover={{ bg: "gray.100", cursor: "pointer" }}>
                <Table.Cell>
                  <Link
                    _hover={{ textDecoration: "underline", color: "teal.600" }}
                    color="blue.500"
                    textDecoration="underline"
                    onClick={() => setSelectedPdf(item.url1)}
                  >
                    {item.name}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    _hover={{ textDecoration: "underline", color: "teal.600" }}
                    color="blue.500"
                    textDecoration="underline"
                    onClick={() => setSelectedPdf(item.url)}
                  >
                    view pdf
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Button colorPalette='cyan'>Fetch Details</Button>
      </Flex>
        
     <Button colorPalette='cyan' marginLeft='10px' marginTop='10px'>Chat Interface</Button>
      {selectedPdf && (
        <Box marginTop='20px' padding='10px'>
          <iframe
            src={selectedPdf}
            title="PDF Preview"
            className="pdf-iframe"
          />
        </Box>
      )}

    </div>
  );
};

export default ReportTable;
