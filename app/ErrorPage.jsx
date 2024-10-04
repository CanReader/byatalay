export default function ErrorPage ({code,message}){
    return (
        <div style={styles.main}>
            <h1 style={styles.h1}>{code}</h1>
            <div style={styles.text}>
                <h2 style={styles.h2}>
                    {message}   
                </h2>
            </div>
        </div>
    );
}


const styles = {
    body: {
      padding: 'auto',
      color: '#000',
      background: '#fff',
      margin: 0,
    },
    h1: {
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      display: 'inline-block',
      margin: '0 20px 0 0',
      padding: '0 23px 0 0',
      fontSize: '24px',
      fontWeight: 500,
      verticalAlign: 'top',
      lineHeight: '49px',
      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
    },
    h2: {
      fontFamily: 'system-ui, "Segoe UI"',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '49px',
      margin: 0,
      marginBlockStart: '0.83em',
      marginBlockEnd: '0.83em',
      marginInlineStart: 0,
      marginInlineEnd: 0,
      unicodeBidi: 'isolate',
      display: 'block',
    },
    text: {
      display: 'inline-block',
    },
    main: {
      fontFamily: "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
      height: '100vh',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  