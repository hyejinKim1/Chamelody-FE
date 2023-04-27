import styled from 'styled-components';

export default function Login(){

  const handleLogin = () => {
    const clientId = 'b0d11574667c403b82920e816c68ad54';
    const redirectUri = 'https://chamelody.netlify.app/select';
    const scopes = [
      'user-read-private',
      'user-read-email',
      'user-library-read',
      'user-library-modify',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'streaming'
    ];

    // Spotify 로그인 URL 생성
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;

    // 사용자를 Spotify 로그인 페이지로 리다이렉트
    window.location.href = url;
  };

  return(
    <LoginBtn onClick={handleLogin}> &nbsp; Log in with Spotify &nbsp; </LoginBtn>
  )
}

const LoginBtn = styled.button`
  border: 0.3vh dashed white;
  border-radius: 5vh;
  color: white;
  background: none;
  padding: calc(0.5vh + 0.4vw);
  font-size: calc(0.7vh + 0.7vw);
  font-weight:700; 
  cursor:pointer;
  white-space: nowrap;
`
