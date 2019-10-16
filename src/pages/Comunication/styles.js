import styled from 'styled-components/native'

export const Container = styled.View `
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #1996C2;
`

export const Block = styled.View `
    flexDirection: row;
    borderWidth: 10;
    width: 300;
    borderColor: #8BC0D8;
    borderRadius: 10;
    paddingTop: 20;
    paddingBottom: 20;
    paddingLeft: 20;
    paddingRight: 20;
    backgroundColor: #99DEF4;
`

export const LeftBlock = styled.View `
    flex: 1;
    flexDirection: column;
`

export const RightBlock = styled.View `
    flex: 1;
    flexDirection: column;
    alignItems: center;
    borderRadius: 10;
`

export const TopBlock = styled.View `
    flex: 1;
`

export const BottomBlock = styled.View `
    flex: 1;
    marginTop: -60;
`

export const ImageStyle = styled.Image `
    width: 80;
    height: 140;
    marginBottom: 45;
`