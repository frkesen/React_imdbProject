import React from 'react'
import {Pagination} from "@material-ui/lab";


import { StyledPagination } from "./Pagination.style"

export function PaginationBar({ countPage, page, handleChange }) {
    
    return (
        <StyledPagination>
            <Pagination
                variant="outlined"
                count={countPage}
                page={page}
                onChange={handleChange}
                siblingCount={2}
                boundaryCount={2}
                                           
             />
        </StyledPagination>
    )
}
