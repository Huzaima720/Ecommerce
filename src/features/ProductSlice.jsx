import { createSlice  , createAsyncThunk , createAction} from "@reduxjs/toolkit";

const URL = "https://fakestoreapi.com/products"

export const productsData = createAsyncThunk("product" , async () => {
    const response = await fetch(URL);
    const data = await response.json();
   
    try{
        return data;
    }
    catch(error){
        console.error("Error fetching data: ", error);
        
    }
})

const pending = createAction(productsData.pending)
const fulfilled = createAction(productsData.fulfilled)
const rejected = createAction(productsData.rejected)

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        featuredProducts: [],
        popularProducts: [],
        loading: false,
        error: null,
    },
    
    extraReducers: (builder) =>{
        builder
       .addCase(pending, (state) => {
        state.loading = true;
        state.error = null;
       })
       .addCase(fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        // Manually select 4 products for each category
        state.featuredProducts = action.payload.slice(0, 4); // First 4 as featured
        state.popularProducts = action.payload.slice(4, 8); // Next 4 as popular
       })
       .addCase(rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
       })


    }
    
})

export default productSlice.reducer