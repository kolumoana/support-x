"use client";
import { useState } from "react";
import {
  Textarea,
  Container,
  Title,
  Text,
  Group,
  CopyButton,
  Tooltip,
  ActionIcon,
  rem,
  Space,
} from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { fmtx } from "@/lib/fmtx";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    setFormattedText(fmtx(event.target.value));
  };

  return (
    <Container size="sm">
      <Space h="lg" />
      <Title order={1} mb="xl">
        <span>support </span>
        <span style={{ fontSize: "2.5rem", fontWeight: "1000" }}>𝕏</span>
      </Title>
      <Title order={2} mb="lg">
        fmt
      </Title>
      <Title order={3} mb="xs">
        input
      </Title>
      <Textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        mb="md"
        autosize
        minRows={10}
        maxRows={10}
      />
      <Group align="flex-start" mb="md">
        <Title order={3}>result</Title>
        <CopyButton value={formattedText} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Copied" : "Copy"}
              withArrow
              position="right"
            >
              <ActionIcon
                color={copied ? "teal" : "gray"}
                variant="subtle"
                onClick={copy}
              >
                {copied ? (
                  <IconCheck style={{ width: rem(16) }} />
                ) : (
                  <IconCopy style={{ width: rem(16) }} />
                )}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
      <Textarea
        disabled
        value={formattedText}
        variant="filled"
        readOnly
        autosize
        minRows={10}
        maxRows={10}
      />
    </Container>
  );
};

export default Home;
