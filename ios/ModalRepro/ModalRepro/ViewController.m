//
//  ViewController.m
//  ModalRepro
//
//  Created by Laurence Hartgill on 05/09/2024.
//

#import "ViewController.h"
#import "ReactNativeViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (IBAction)openScreen:(UIButton *)sender {
    ReactNativeViewController *vc = [ReactNativeViewController new];
    [vc setEntryPoint:@"Screen"];
    vc.modalPresentationStyle = UIModalPresentationFullScreen;
    
    [self presentViewController:vc animated:YES completion:nil];
}

- (IBAction)openAnimatedScreen:(id)sender {
    ReactNativeViewController *vc = [ReactNativeViewController new];
    [vc setEntryPoint:@"AnimatedScreen"];
    vc.modalPresentationStyle = UIModalPresentationFullScreen;
    
    [self presentViewController:vc animated:YES completion:nil];
}

@end
