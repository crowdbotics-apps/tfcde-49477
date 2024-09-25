import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_jcdfer_list = createAsyncThunk(
  "jcdfers/api_v1_jcdfer_list",
  async payload => {
    const response = await apiService.api_v1_jcdfer_list(payload)
    return response.data
  }
)
export const api_v1_jcdfer_create = createAsyncThunk(
  "jcdfers/api_v1_jcdfer_create",
  async payload => {
    const response = await apiService.api_v1_jcdfer_create(payload)
    return response.data
  }
)
export const api_v1_jcdfer_retrieve = createAsyncThunk(
  "jcdfers/api_v1_jcdfer_retrieve",
  async payload => {
    const response = await apiService.api_v1_jcdfer_retrieve(payload)
    return response.data
  }
)
export const api_v1_jcdfer_update = createAsyncThunk(
  "jcdfers/api_v1_jcdfer_update",
  async payload => {
    const response = await apiService.api_v1_jcdfer_update(payload)
    return response.data
  }
)
export const api_v1_jcdfer_partial_update = createAsyncThunk(
  "jcdfers/api_v1_jcdfer_partial_update",
  async payload => {
    const response = await apiService.api_v1_jcdfer_partial_update(payload)
    return response.data
  }
)
export const api_v1_jcdfer_destroy = createAsyncThunk(
  "jcdfers/api_v1_jcdfer_destroy",
  async payload => {
    const response = await apiService.api_v1_jcdfer_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jcdfersSlice = createSlice({
  name: "jcdfers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_jcdfer_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jcdfer_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jcdfer_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jcdfer_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jcdfer_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jcdfer_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_jcdfer_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_jcdfer_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_jcdfer_list,
  api_v1_jcdfer_create,
  api_v1_jcdfer_retrieve,
  api_v1_jcdfer_update,
  api_v1_jcdfer_partial_update,
  api_v1_jcdfer_destroy,
  slice: jcdfersSlice
}
