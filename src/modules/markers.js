import { generateRandomNumber } from '../common/utils'
// ------------------------------------
// Constants
// ------------------------------------
export const MARKERS_COUNT = 4;
export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 10;
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
};


// ------------------------------------
// Initial state
// ------------------------------------
const initialMarkerState = {
  id: null,
  expectedX: 0,
  expectedY: 0,
  realX: null,
  realY: null,
  isDropped: false
};

const generateMarkers = function () {
  let ids = [];
  let entities = {};

  for (var i = 0; i < MARKERS_COUNT; i++) {
    const id = `marker-${i}`;
    ids = ids.concat(id);
    entities[id] = createMarker(id);
  }

  return {
    ids,
    entities
  };
};

export const createMarker = function (id) {
  const expectedX = generateRandomNumber(0, GRID_WIDTH);
  const expectedY = generateRandomNumber(0, GRID_WIDTH);
  return {
    ...initialMarkerState,
    id,
    expectedX,
    expectedY
  }
};

const initialState = generateMarkers();

// ------------------------------------
// Reducer
// ------------------------------------
export default function markersReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state
}
