import styled from "styled-components"

export const Status = styled('span')(({isonline}) => {
    return {
        fontSize: '50px',
        color: isonline=== "true" ? 'green' : 'red',
}
}
)

export const List = styled('ul')(() => {
    return {
    listStyle: 'none'
}
  
})
