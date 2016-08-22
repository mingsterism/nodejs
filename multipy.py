import sys

def read_in():
	lines = sys.stdin.readlines()
	# print(lines)
	return lines[0]

def main():
	line = read_in()
	print(line + 'whats up my friend')
	return line 

if __name__ == '__main__':
	main()