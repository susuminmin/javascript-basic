from time import sleep

def sleep_3():
    sleep(3)
    print('Wake Up')


print('Start Sleeping')
sleep_3()
print('End of Program')

'''
$ python 00_blocking.py
Start Sleeping
Wake Up
End of Program

$ node 00_non_blocking.js
Start Sleeping!!
End of Program
Wake UP!!!!
'''