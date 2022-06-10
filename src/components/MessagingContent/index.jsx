import React, { useState } from "react";
import { Button, NewMessageModal, SearchInput } from "../";

export const MessagingContent = () => {
  const [newMessageModalIsOpen, setNewMessageModalIsopen] = useState(false);
  return (
    <>
      <div className="flex" style={{ columnGap: 8 }}>
        <section
          style={{
            marginBottom: 18,
            padding: "38px 24px",
            flex: 0.3,
            height: "90vh",
          }}
          className="bg-white"
        >
          <header
            className="flex justify-between"
            style={{
              paddingBottom: 27,
              borderBottom: "1px solid rgba(219, 226, 223, 1)",
              marginBottom: 24,
            }}
          >
            <h2 className="f18 fg-dark1 fw500">Send Message</h2>
            <button
              className="transparent f14"
              style={{
                color: "rgba(64, 145, 108, 1)",
                border: "none",
                borderBottom: "1px solid rgba(64, 145, 108, 1)",
              }}
            >
              Send to all
            </button>
          </header>
          <SearchInput />
          <div style={{ height: "100%" }} className="center">
            <p className="fg-grey2">No message yet</p>
          </div>
        </section>
        <section
          style={{ flex: 0.7, height: "90vh", paddingLeft: 129 }}
          className="bg-white flex align-center"
        >
          <div className="" style={{ padding: "40px 32px" }}>
            <h2 className="f24 fw700">Select a message</h2>
            <p style={{ marginTop: 16, width: 325 }}>
              Choose from your existing conversations or start a new one.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button
                title="StartConversation"
                classes="bg-grey1 fg-white br-4"
                style={{ padding: "17px 32px" }}
                onClick={() => setNewMessageModalIsopen(true)}
              />
            </div>
          </div>
        </section>
      </div>
      <NewMessageModal
        isOpen={newMessageModalIsOpen}
        closeModal={setNewMessageModalIsopen}
      />
    </>
  );
};
