# Triangle-tracker
#### Brief description of application
This is an application that will help us know whether a triangle is isosceles,
 equilateral, scalene or NOT a triangle at all.
#### By **Dennis Makori Nyamweya**
## Description
This applications takes input data in form of the length of sides of a triangle,then determines if
it is indeed a triangle.After the data is fed into the website, a pop-up appears showing whether it is an equilateral
triangle or scalene or isosceles or not a triangle at all.
## Setup/Installation Requirements
* git clone https://github.com/dennisnyamweya/triangle-tracker.git
* cd triangle-tracker
* open index.html using a browser
## Known Bugs
There are no known bugs but feel free to fork and improve the system once you see a bug or contact me.
## Technologies Used

 * HTML/CSS
 * Bootstrap
 * Javascript


## BDD
This application takes data fed into the website then checks if the conditions are met.If the conditions meet it
checks whether if it is a triangle,and if it is it shows a popup to display the type of triangle.If not it shows a popup
confirming it is not a triangle.
| Behaviour                   | Input      | Input     | Input     | Output                |

 |Our program should handle:   | hypotenuse | adjascent |  opposite |                       |

 |-----------------------------|------------|-----------|-----------|---------------------- |

 |  all sides must be equal.   |      4     |    4      |     4     |Equilateral triangle   |

 |-----------------------------|------------|-----------|-----------|-----------------------|

 | two sides are exactly equal |      4     |    5      |     3     |Isosceles triangle     |

 |-----------------------------|------------|-----------|-----------|-----------------------|

 | none of the sides is equal  |            |           |           |                       |

 |  & sum of any two sides is  |      5     |      4    |     3     |Scalene triangle       |

 |greater than the third side  |            |           |           |                       |

 |-----------------------------|------------|-----------|-----------|-----------------------|

 |sum of any two sides of the  |            |           |           |                       |

 |triangle is not equal to or  |      9     |      4    |     3     |Not a triangle         |

 |less than the third remaining|            |           |           |                       |

 |side                         |            |           |           |                       |


## Contact
You can communicate to me via email.My email is denisnyamweya813@gmail.com
# License
Copyright (c) 2019 **Dennis Makori Nyamweya**
MIT License
Copyright (c) [2019] [-Dennis Makori Nyamweya-]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
