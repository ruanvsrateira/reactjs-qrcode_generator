import { Container, Text } from './styled';
import { MdDownload } from 'react-icons/md'

const img = document.querySelector('img') as HTMLImageElement;

interface ToolBarProps {
    onClick?: () => void
}

export const ToolBar = ({onClick}: ToolBarProps) => {
    return(
        <Container onClick={onClick}>
            <Text>Baixar QRCode</Text>
            <MdDownload size={20} color="#fff" style={{ marginLeft: 5 }} />
        </Container>   
    )
}