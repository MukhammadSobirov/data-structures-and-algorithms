def find_least_common_num (arr1, arr2, arr3):
  #индексы для всех трех массивов
    
    i = 0 
    j = 0 
    k = 0
    
  # цикл через все 3 массива
    while i < len(arr1) and j < len(arr2) and k < len(arr3):
        # ищем наименьшее общее число
        if arr1[i] == arr2[j] and arr2[j] == arr3[k]:
            return arr1[i]
        
        # повышаем значение индекса
        # для наименьшего числа.
        if arr1[i] <= arr2[j] and arr1[i] <= arr3[k]:
            i+=1
            
        elif arr2[j] <= arr1[i] and arr2[j] <= arr3[k]:
            j+=1
            
        elif arr3[k] <= arr1[i] and arr3[k] <= arr2[j]:
            k+=1
            
    return -1

def main():
    v1 = [6, 7, 10, 25, 30, 63, 64]
    v2 = [0, 4, 5, 6, 7, 8, 50]
    v3 = [1, 6, 10, 14]
    result = find_least_common_num(v1, v2, v3)
    print("Least Common Number: " + str(result))
    
if __name__ == '__main__':
    main()
    
# O(n)
    