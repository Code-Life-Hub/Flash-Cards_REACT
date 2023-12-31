<<<<<<< HEAD
import React from "react";
import { Router } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import App from "../App";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import {
  createCard,
  createDeck,
  deleteCard,
  deleteDeck,
  listDecks,
  readCard,
  readDeck,
  updateCard,
  updateDeck,
} from "../utils/api";

require("cross-fetch/polyfill");

jest.mock("../utils/api");

describe("App", () => {
  beforeEach(() => {
    createCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    createDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
    deleteCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    deleteDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
    listDecks.mockResolvedValue([
      {
        front:
          "Default mock response. If you see this, you probably do not need this API call.",
      },
    ]);
    readCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    readDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
    updateCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    updateDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
  });

  test('landing on a bad page shows "Not Found" page', () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText("Not Found")).toBeTruthy();
  });

  test("route for /", async () => {
    const mockDecks = [
      {
        id: 1,
        name: "Tutorial",
        description: "A brief tutorial on the platform.",
        cards: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
        ],
      },
    ];

    const mockDecksPromise = Promise.resolve(mockDecks);

    listDecks.mockImplementation(() => mockDecksPromise);

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await act(() => mockDecksPromise);

    expect(screen.getByText("Tutorial")).toBeTruthy();
    expect(screen.getByText("2 cards")).toBeTruthy();
    expect(screen.getByText("Mock React Router")).toBeTruthy();
    expect(screen.getByText("0 cards")).toBeTruthy();
  });
});
=======
import React from "react";
import { Router } from "react-router-dom";
import { act, render, screen } from "@testing-library/react";
import App from "../App";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import {
  createCard,
  createDeck,
  deleteCard,
  deleteDeck,
  listDecks,
  readCard,
  readDeck,
  updateCard,
  updateDeck,
} from "../utils/api";

require("cross-fetch/polyfill");

jest.mock("../utils/api");

describe("App", () => {
  beforeEach(() => {
    createCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    createDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
    deleteCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    deleteDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
    listDecks.mockResolvedValue([
      {
        front:
          "Default mock response. If you see this, you probably do not need this API call.",
      },
    ]);
    readCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    readDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
    updateCard.mockResolvedValue({
      front:
        "Default mock response. If you see this, you probably do not need this API call.",
    });
    updateDeck.mockResolvedValue({
      name: "Default mock response. If you see this, you probably do not need this API call.",
    });
  });

  test('landing on a bad page shows "Not Found" page', () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText("Not Found")).toBeTruthy();
  });

  test("route for /", async () => {
    const mockDecks = [
      {
        id: 1,
        name: "Tutorial",
        description: "A brief tutorial on the platform.",
        cards: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
        ],
      },
    ];

    const mockDecksPromise = Promise.resolve(mockDecks);

    listDecks.mockImplementation(() => mockDecksPromise);

    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await act(() => mockDecksPromise);

    expect(screen.getByText("Tutorial")).toBeTruthy();
    expect(screen.getByText("2 cards")).toBeTruthy();
    expect(screen.getByText("Mock React Router")).toBeTruthy();
    expect(screen.getByText("0 cards")).toBeTruthy();
  });
});
>>>>>>> ade2e457c2ee77b0eada64b3d8bf51705183b2ff
