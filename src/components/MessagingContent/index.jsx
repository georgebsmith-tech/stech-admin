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
            padding: "38px 0px",
            flex: 0.3,
            height: "90vh",
          }}
          className="bg-white"
        >
          <header
            className="flex justify-between"
            style={{
              padding: "0 24px 27px 24px",
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
          <div style={{ padding: "2px 24px" }}>
            <SearchInput />
          </div>
          <div style={{ height: "100%" }} className={!true ? "" : "center"}>
            {!true ? (
              <MessagesList />
            ) : (
              <p className="fg-grey2">No message yet</p>
            )}
          </div>
        </section>
        {!true ? (
          <SendGroupMessageView />
        ) : (
          <SelectMessageView openModal={setNewMessageModalIsopen} />
        )}
      </div>
      <NewMessageModal
        isOpen={newMessageModalIsOpen}
        closeModal={setNewMessageModalIsopen}
      />
    </>
  );
};

const SelectMessageView = ({ openModal }) => {
  return (
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
            onClick={() => openModal(true)}
          />
        </div>
      </div>
    </section>
  );
};

const SendGroupMessageView = () => {
  return (
    <section style={{ flex: 0.7, height: "90vh" }} className="bg-white">
      <header
        style={{
          padding: "34px 32px",
          height: 88,
          borderBottom: "1px solid rgba(219, 226, 223, 1)",
        }}
      >
        <h3 className="f16 fg-dark1">
          Emmanuel James, Emmanuel James, Emmanuel James{" "}
        </h3>
      </header>
      <div className="flex-col justify-between group-chat-wrapper relative">
        <main>mmmklmkml</main>
        <div
          style={{
            padding: "34px 32px",
            // height: "100%",
            borderTop: "1px solid rgba(219, 226, 223, 1)",
          }}
          className="flex-col justify-end"
        >
          <div>
            <textarea
              style={{
                width: "100%",
                border: "1px solid rgba(219, 226, 223, 1)",
              }}
              rows={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MessagesList = () => {
  return (
    <ul
      style={{
        marginTop: 33,
        height: "80%",
        // backgroundColor: "red",
        overflowY: "auto",
      }}
    >
      {[1, 2, 3, 4].map((message, idx) => (
        <LastMessage key={idx} />
      ))}
    </ul>
  );
};

const LastMessage = () => {
  return (
    <li
      className="flex justify-between pointer align-center hover-grey"
      style={{ columnGap: 16, marginBottom: 5, padding: "10px 24px" }}
    >
      <div className="flex align-center" style={{ columnGap: 16 }}>
        <div>
          <img src="/images/avatar.svg" style={{ width: 48, height: 48 }} />
        </div>
        <div>
          <h3 className="f16 fg-grey1 fw500 " style={{ marginBottom: 8 }}>
            Precious Malachy
          </h3>
          <p className="f12 fg-grey4">See you next year</p>
        </div>
      </div>
      <div>
        <p className="f12 fg-grey4" style={{ marginBottom: 9 }}>
          MAy 34
        </p>
        <div className="justify-end flex">
          <div
            style={{
              width: 5,
              height: 5,
              backgroundColor: "rgba(64, 145, 108, 1)",
              borderRadius: 100,
            }}
          />
        </div>
      </div>
    </li>
  );
};
