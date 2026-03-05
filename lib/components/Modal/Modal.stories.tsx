import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Input } from "../Input";
import { Button, ROLE } from "../Button";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Example modal title",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Example modal title",
    // onClose is provided by the render function but required in the type
    onClose: () => {},
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
      if (args.onClose) args.onClose();
    };

    const defaultContent = (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1.5rem",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "100%", maxWidth: "240px" }}>
            <Input id="first-name" label="First name" showLabel />
          </div>
          <div style={{ width: "100%", maxWidth: "240px" }}>
            <Input id="last-name" label="Last name" showLabel />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "600px",
              gap: "0.5rem",
            }}
          >
            <Button
              style={{ flex: 1 }}
              variant={ROLE.SECONDARY}
              type="button"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{ flex: 1 }}
              variant={ROLE.PRIMARY}
              type="button"
              onClick={() => {
                handleClose();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );

    return (
      <div style={{ padding: "2rem", height: "500px" }}>
        <Button type="button" onClick={() => setOpen(true)}>
          Open modal
        </Button>

        {open && (
          <Modal
            {...args}
            onClose={handleClose}
            content={args.content ?? defaultContent}
          />
        )}
      </div>
    );
  },
};
