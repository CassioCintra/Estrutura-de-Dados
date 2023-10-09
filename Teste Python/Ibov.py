import pandas as pd
import yfinance as yf
import matplotlib.pyplot as plt

def __name__():
    # Define o símbolo do Ibovespa em R$
    ibov_brl = yf.Ticker("^BVSP.SA")
    # Define o símbolo do Ibovespa em USD
    ibov_usd = yf.Ticker("^BVSP")

    # Obtém os dados históricos
    ibov_brl_data = ibov_brl.history(period="1y")
    ibov_usd_data = ibov_usd.history(period="1y")

    # Verifica se os índices dos DataFrames são os mesmos
    assert (ibov_brl_data.index == ibov_usd_data.index).all()

    # Cria um novo DataFrame com os preços em R$ e $ em colunas separadas
    ibov_combined = pd.DataFrame({
        'IBOV BRL': ibov_brl_data['Close'],
        'IBOV USD': ibov_usd_data['Close']
    })

    # Plota o gráfico
    plt.figure(figsize=(12, 6))
    plt.plot(ibov_combined.index, ibov_combined['IBOV BRL'], label='IBOV BRL', color='blue')
    plt.plot(ibov_combined.index, ibov_combined['IBOV USD'], label='IBOV USD', color='green')
    plt.xlabel('Data')
    plt.ylabel('Valor do Ibovespa')
    plt.title('Ibovespa em R$ e $')
    plt.legend()
    plt.grid(True)
    plt.show()