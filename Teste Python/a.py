import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
import pymongo

# Conecte-se ao banco de dados MongoDB
client = pymongo.MongoClient("mongodb+srv://cassiocr2012:Abc123@cluster0.snfh34p.mongodb.net/")
db = client["fatec"]
collection = db["coffe"]

# Recupere os dados do MongoDB (substitua 'seu_filtro' pelo filtro apropriado)
data = [doc["transaction_qty"] for doc in collection.find({}, {"transaction_qty": 1})]

# Calcule a média, moda e mediana
mean = np.mean(data)
mode = stats.mode(data)
median = np.median(data)

# Crie um histograma dos dados
plt.hist(data, bins=10, edgecolor='k')
plt.xlabel('Valores')
plt.ylabel('Frequência')
plt.title('Histograma dos Dados')
plt.grid(True)

# Exiba os resultados
print(f"Média: {mean}")
print(f"Moda: {mode.mode[0]} (ocorreu {mode.count[0]} vezes)")
print(f"Mediana: {median}")

# Mostre o gráfico
plt.show()