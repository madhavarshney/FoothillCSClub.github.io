var levels = [
    [
    "", "", "", "", "", "",
    "  #####   #####      #####  #       #     # ######  ",
    " #     # #     #    #     # #       #     # #     # ",
    " #       #          #       #       #     # #     # ",
    " #        #####     #       #       #     # ######  ",
    " #             #    #       #       #     # #     # ",
    " #     # #     #    #     # #       #     # #     # ",
    "  #####   #####      #####  #######  #####  ######  ",
    ""],
    [
    "", "",
    "  ################################################  ",
    "  #                                              #  ",
    "  #                                              #  ",
    "  #  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  #  ",
    "  #  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  #  ",
    "     ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##     ",
    "     ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##     ",
    "  #  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  #  ",
    "  #  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  #  ",
    "  #                                              #  ",
    "  #                                              #  ",
    "  ################################################  ",
    ""],
    [
    "",
    "   ##   ##                                ##   ##   ",
    "   ##   ##    ###########  ###########    ##   ##   ",
    "   ##         ###########  ###########         ##   ",
    "                #########  #########                ",
    "         ##       #######  #######       ##         ",
    "          ###       ############       ###          ",
    "    ##      ###       ###  ###       ###      ##    ",
    "    ####      ###                  ###      ####    ",
    "      ####      ###              ###      ####      ",
    "        ####      ###          ###      ####        ",
    "          ####      ###      ###      ####          ",
    "            ####      ###  ###      ####            ",
    "              ####      ####      ####              ",
    "                ####            ####                ",
    "                  ####        ####                  ",
    "                    ####    ####                    ",
    "                      ########                      ",
    "                        ####                        ",
    ""],
    [
    "", "",
    "   #     #     #     #           #     #     #      ",
    "  ###   ###   ###   ###         ###   ###   ###     ",
    "   #     #     #     #           #     #     #      ",
    "      #           #     #     #     #     #     #   ",
    "     ###         ###   ###   ###   ###   ###   ###  ",
    "      #           #     #     #     #     #     #   ",
    "         #     #     #     #           #     #      ",
    "        ###   ###   ###   ###         ###   ###     ",
    "         #     #     #     #           #     #      ",
    "      #     #           #     #     #           #   ",
    "     ###   ###         ###   ###   ###         ###  ",
    "      #     #           #     #     #           #   ",
    ""],
    [
    "", "",
    "       ##             ##             ##             ##        ",
    "      ####           ####           ####           ####       ",
    "     ######         ######         ######         ######      ",
    "    ## ## ##       ## ## ##       ## ## ##       ## ## ##     ",
    "    ########       ########       ########       ########     ",
    "     # ## #         # ## #          #  #          # ## #      ",
    "    #      #       #      #        # ## #        #      #     ",
    "     #    #         #    #        # #  # #        #    #      ",
    "", "",
    "    #     #         #     #         #     #         #     #   ",
    "     #   #        #  #   #  #        #   #        #  #   #  # ",
    "    #######       # ####### #       #######       # ####### # ",
    "   ## ### ##      ### ### ###      ## ### ##      ### ### ### ",
    "  ###########     ###########     ###########     ########### ",
    "  # ####### #      #########      # ####### #      #########  ",
    "  # #     # #       #     #       # #     # #       #     #   ",
    "     ## ##         #       #         ## ##         #       #  ",
    ""],
    [
    "", "",
    "   ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##   ",
    "   ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##   ",
    "", "",
    "     ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##     ",
    "     ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##     ",
    "", "",
    "   ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##   ",
    "   ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##  ##   ",
    "", "",
    "  ###############  ##############  ###############  ",
    ""],
    [
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
    "                #################################    ###########            ############         #############   #######################                        ###########################  ##########           ############  #######################   #######################        ",
    "               #                               #    #          #           #           #        #           #   #                     #                        #                         #   #        #          #         #   #                     #   #                      #        ",
    "              #                               #    #           #           #           #        #           #   #                     #                        #                         #   #        #          #         #   #                     #   #                      #        ",
    "             #                                #    #           #           #           #       #            #   #                     #                        #                         #   #        #         #         #    #                     #   #                      #        ",
    "             #                               #    #            #           #           #       #            #   #                     #                        #                         #   #        #         #         #    #                     #   #                       #       ",
    "            #                               #    #             #          #            #      #             #  #                     #                        #                         #    #        #        #         #    #                     #   #                        #       ",
    "           #                                #    #             #          #            #      #             #  #                     #                        #                         #    #        #        #         #    #                     #   #                        #       ",
    "          #                                #    #              #          #            #     #              #  #                     #                        #                         #    #        #       #         #     #                     #   #                         #      ",
    "          #         #######################     ################          #############      ###############   ######################                         ##########################      #########       ##########      ######################    ###################       #      ",
    "         #         #                                                                                                                                                                                                                                                     #         #     ",
    "        #         #                                                                                                                                                                                                                                                     #         #      ",
    "       #         #                                                                                                                                                                                                                                                     #         #       ",
    "       #         #      ##################    ###################        ###############   #################   ######################                        ##########       ##########      ##########    ###########      #######################   ################         #        ",
    "      #         #      #                #    #                  #       #              #  #               #   #                    #                        #        #       #        #       #        #   #         #      #                     #   #                        #         ",
    "     #         #      #                #    #                   #       #              # #                #   #                    #                        #        #       #        #       #        #   #        #       #                     #   #                        #         ",
    "    #         #       #                #    #                   #       #              # #                #   #                    #                        #        #       #        #       #        #  #         #       #                     #   #                       #          ",
    "    #         #      #                #    #                    #       #        #     # #      #         #   #                   #                         #        #       #        #       #        #  #        #        #                     #   #                      #           ",
    "    #         #     #                 #    #                    #      #        ##     ##      #         #   #                    #                        #        #       #        #        #        # #         #       #                     #   #                      #            ",
    "    #         #     #                #    #                     #      #        ##     ##     ##         #   #                    #                        #        #       #        #        #        # #        #        #                     #   #                    ##             ",
    "     #        #    #                 #    #                     #      #        ##     #      ##         #   #        ############                         #        #       #        #        #        ##         #        #                     #   #         ###        #              ",
    "     #         #   #########        #    #          #####       #      #        ##           # #         #   #       #                                     #        #       #        #        #                  #         #        #############    #        #  #        #              ",
    "     #         #          #        #    #          #    #       #     #        # #           ##         #   #        #                                    #        #       #        #         #                  #        #        #                #         #  #        #              ",
    "      #        #         #         #    #         #     #       #     #        # #          # #         #   #        #                                    #        #       #        #         #                 #         #        #                #         #  #         #             ",
    "      #         #        #        #    #          #     #        #    #        # #          # #         #   #        #                                    #        #       #        #          #                #         #        #                #         #   #        #             ",
    "      #         #       #         #    #         #      #        #    #        # #         #  #         #   #        #                                    #        #       #        #          #               #          #        #                #        #    #        #             ",
    "       #         #######         #    #         #       #        #   #        #  #         # #         #   #         ##############                      #         ########        #           #               #         #         ##############  #         #    #         #            ",
    "       #                         #    #         #       #        #   #        #  #        #  #         #   #                     #                       #                         #           #              #          #                     #   #         #    #         #            ",
    "       #                        #    #         #        #        #   #        #  #        #  #         #   #                     #                       #                         #           #              #          #                     #   #         #     #        #            ",
    "        #                      #    #          #        #        #   #        #  #       #   #         #   #                     #                       #                         #           #             #           #                     #   #         #     #         #           ",
    "        #                      #    #         #         #        #  #        #   #       #  #         #   #                      #                      #                         #            #             #          #                      #  #         #      #         #           ",
    "        #                     #    #         #          #        #  #        #   #      #   #         #   #                     #                       #                         #            #            #           #                     #   #         #       #        #           ",
    "         #                    #    #         #          #        #  #        #   #      #   #         #   #                     #                       #                         #            #            #           #                     #   #         #       #         #          ",
    "         #                   #    #         #           #        #  #        #   #     #    #         #   #                     #                       #                         #            #           #            #                     #   #         #       #         #          ",
    "          ##########         #    ##########             #########  #########     #####     ##########    ######################                        ##########################              ###########             ######################    ##########        #         #          ",
    "                  #         #                                                                                                                                                                                                                                        #        #          ",
    "                 #         #                                                                                                                                                                                                                                         #         #         ",
    "                 #         #                                                                                                                                                                                                                                         #         #         ",
    "                #         #     ####################################################################################################################################################################################################################################  #        #         ",
    "                #         #    #                                                                                                                                                                                                                                   #  #         #        ",
    "               #         #    #                                                                                                                                                                                                                                    #  #         #        ",
    "               #         #    #                                                                                                                                                                                                                                    #  #         #        ",
    "              #         #    #                                                                                                                                                                                                                                      #  #         #       ",
    "             #         #     #                                                                                                                                                                                                                                      #  #         #       ",
    "             #         #    #                                                                                                                                                                                                                                       #  #         #       ",
    "            #         #    #                                                                                                                                                                                                                                         #  #         #      ",
    "            #         #    #                                                                                                                                                                                                                                         #  #         #      ",
    "           #         #    #                                                                                                                                                                                                                                          #  #         #      ",
    "           ##########     ############################################################################################################################################################################################################################################   ##########      ",
    ""]
];
