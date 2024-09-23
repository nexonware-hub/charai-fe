function ConversationCard({title, description, characterId, onClick}) {
    return ( 
        <div 
        onClick={onClick}
        style={{
            cursor: 'pointer',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
            marginBottom: '5px',
            width: '300px',
            transition: 'box-shadow 0.3s ease',
            border: 'none',
            position: 'relative',
            overflow: 'hidden',
            marginRight: '20px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'}
>
    <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.3)',
            filter: 'blur(15px)',
            pointerEvents: 'none',
        }}>
    </div>
    <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{title}</h3>
    <p style={{ margin: '0', color: '#555' }}>{description}</p>
</div>

     );
}

export default ConversationCard;