import pytube

# Pergunte ao usuário qual o URL do vídeo
videoURL = input('Enter URL: ')

try:
    # Crie uma instância do vídeo do YouTube
    videoInstance = pytube.YouTube(videoURL)
    
    # Obtenha a resolução mais alta disponível
    stream = videoInstance.streams.get_highest_resolution()
    
    # Defina um destino para o download
    stream.download(output_path='C:\Vídeos Python')
    
    print("Download concluído com sucesso!")

except Exception as e:
    print("Ocorreu um erro durante o download:", str(e))