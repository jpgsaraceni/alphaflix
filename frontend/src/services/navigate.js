import { useHistory } from 'react-router-dom';

export const navigateToHome = () => {
    const history = useHistory();

    history.push('home');
}