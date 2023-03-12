import styled from '@emotion/styled'
import OpenColor from 'open-color'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  min-height: 100vh;
  background-color: ${OpenColor.gray[0]};
  > header {
    background-color: white;
    border-bottom: 1px solid ${OpenColor.gray[2]};
    .wrapper {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
      }
      .rt {
        display: flex;
        gap: 10px;
      }
    }
  }
  > main {
  }
`

export default StyledWrapper
