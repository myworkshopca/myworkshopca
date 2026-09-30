# get the size (height and width) of a the terminal screen:
height, width = stdscr.getmaxyx()

# define the message to paint.
msg = "Welcome to MyWorkshop coding club!"

# do the calculation to find out the starting coordinates:
# - the starting y axis will at the half of the screen height
y = height // 2

# - the starting x axis will need some calculation
x = (width - len(msg)) // 2

# paint the message at the specific coordinates.
stdscr.addstr(y, x, msg)
